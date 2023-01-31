import InputCustom from 'Component/Common/InputCustom';
import FormItem from 'Component/FormItem/FormItem';
import { IDataMultiStepForm, IEducation } from 'interface/MultiStep';
import { UseFormRegister } from 'react-hook-form';

export interface IEducationFormProps extends IDataMultiStepForm {
  updateFields: (field: Partial<IEducation>) => void
  // register: UseFormRegister<IDataMultiStepForm>;
  register: any
}

export default function EducationForm({ major, university, updateFields, register }: IEducationFormProps) {
  return <div>
    <FormItem title='Education'>
      <InputCustom
        register={register}
        id='major'
        label='Major'
        placeHolder='Input your major'
        value={major}
        onChange={e => {
          updateFields({ major: e.target.value })
        }}
      />
      <InputCustom
        register={register}
        id='university'
        label='University'
        placeHolder='Input your university'
        value={university}
        onChange={e => {
          updateFields({ university: e.target.value })
        }}
      />
    </FormItem>
  </div>
}
