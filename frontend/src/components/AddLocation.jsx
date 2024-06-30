import React from 'react'
import { useForm } from '@mantine/form'
import { validateString } from '../utils/common'
import { Select, TextInput } from '@mantine/core'
import useCountries from '../hooks/useCountries'
import Map from './Map'


const AddLocation = ({ propertyDetails, setPropertyDetails }) => {

  const { getAll } = useCountries()
  console.log('Datos de países:', getAll());

  const form = useForm({
    initialValues: {
      country: propertyDetails?.country || '',
      city: propertyDetails?.city || '',
      address: propertyDetails?.address || '',
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value)
    }
  })

  const { city, country, address } = form.values;

  return (
    <form>
      <div className="flexCenter">
        {/* left */}
        <div className="flexCenter flex-1">
          {/* inputs */}
          <div>
            <Select
              w={"100%"}
              withAsterisk
              label="Country"
              clearable
              searchable
              data={getAll()}
              {...form.getInputProps("country", { type: "input" })}
            />
            <TextInput
              w={"100%"}
              withAsterisk
              label="City"
              {...form.getInputProps("city", { type: "input" })}
            />
            <TextInput
              w={"100%"}
              withAsterisk
              label="Address"
              {...form.getInputProps("address", { type: "input" })}
            />
          </div>
        </div>
        {/* right */}
        <div className="flex-1">
          <Map
            address={address}
            city={city}
            country={country}
          />
        </div>
      </div>
    </form>
  )
}

export default AddLocation