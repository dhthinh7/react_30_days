import InputCustom from 'Component/Common/InputCustom';
import FormItem from 'Component/FormItem/FormItem';
import { IAddress, IDataMultiStepForm } from 'interface/MultiStep';
import { UseFormRegister } from 'react-hook-form';

export interface IAddressFormProps extends IDataMultiStepForm {
  updateFields: (filed: Partial<IAddress>) => void
  // register: UseFormRegister<IDataMultiStepForm>;
  register: any
}

export default function AddressForm({ street, city, updateFields, register }: IAddressFormProps) {
  return <div>
    <FormItem title="Address">
      <InputCustom
        register={register}
        id="street"
        placeHolder="Street"
        label="Street"
        value={street}
        onChange={e => {
          updateFields({ street: e.target.value })
        }}
      />

      <InputCustom
        register={register}
        id="city"
        placeHolder="City"
        label="City"
        value={city}
        onChange={e => {
          updateFields({ city: e.target.value })
        }}
      />
    </FormItem>
  </div>
}

