import AddressForm from "Component/MultiStepForm/AddressForm";
import useMultiStepForm from "CustomHook/useMultiStepForm";
import { IDataMultiStepForm } from "interface/MultiStep";
import { DataMultiStep } from "mock/MultiStep";
import { useState } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form"
import UserDetailForm from "Component/MultiStepForm/UserDetail";
import EducationForm from "Component/MultiStepForm/Education";

export interface IMultiStepFormProps { }

export default function MultiStepForm(props: IMultiStepFormProps) {
  let { register, handleSubmit } = useForm<IDataMultiStepForm>()
  let [data, setData] = useState(DataMultiStep.INITIAL_DATA)

  const updateFields = (field: Partial<IDataMultiStepForm>) => {
    setData(prev => {
      return { ...prev, ...field }
    })
  }

  let { steps, currentIndex, isFirstIndex, isLastIndex, next, back } = useMultiStepForm([
    <AddressForm {...data} updateFields={updateFields} register={register} />,
    <UserDetailForm {...data} updateFields={updateFields} register={register} />,
    <EducationForm {...data} updateFields={updateFields} register={register} />,
  ])

  const onSubmit: SubmitHandler<IDataMultiStepForm> = (value) => {
    // e.preventDefault()
    console.log("handle submit data: ", value)
  }

  return (
    <MultiStepFormWrapper className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pageOnTotal">{currentIndex + 1} / {steps.length}</div>
        {steps[currentIndex]}
        <div className="button">
          {!isFirstIndex ? <button type="button" className="btn btn__prev" onClick={back}>Prev</button> : <div className="btn btn__prev btn__overlay">Prev</div>}
          {!isLastIndex ? <button type="button" className="btn btn__next" onClick={next}>Next</button> : <div className="btn btn__next btn__overlay">Next</div>}
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </MultiStepFormWrapper>
  );
}

const MultiStepFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  form {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    background-color: aliceblue;
  
    .pageOnTotal {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .button {
      display: flex;
      justify-content: end;
      margin-top: 1rem;

      .btn__overlay {
        opacity: .5;
        cursor: not-allowed;
      }
    }

    .btn__prev {
      margin-right: 10px;
    }
  }
`;

