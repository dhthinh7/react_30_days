import InputCustom from 'Component/Common/InputCustom';
import FormItem from 'Component/FormItem/FormItem';
import { IDataMultiStepForm, IUser } from 'interface/MultiStep';
import { UseFormRegister } from 'react-hook-form';


export interface IUserDetailFormProps extends IDataMultiStepForm {
  updateFields: (field: Partial<IUser>) => void
  // register: UseFormRegister<IDataMultiStepForm>;
  register: any
}

export default function UserDetailForm({ name, age, updateFields, register }: IUserDetailFormProps) {
  return <div>
    <FormItem title="User Detail">
      <InputCustom
        register={register}
        id="name"
        placeHolder="Name"
        label="Name"
        value={name}
        onChange={e => {
          updateFields({ name: e.target.value })
        }}
      />

      <InputCustom
        register={register}
        id="age"
        placeHolder="Age"
        label="Age"
        value={age}
        onChange={e => {
          updateFields({ age: e.target.value })
        }}
      />

    </FormItem>
  </div>
}
