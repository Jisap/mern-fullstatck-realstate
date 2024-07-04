import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Group, Button, NumberInput, Box } from '@mantine/core'
import { useForm } from '@mantine/form'
import userDetailContext from '../context/userDetailContext'
import useProperties from '../hooks/useProperties'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { createResidency } from '../utils/api.js'

const Facilities = ({ 
  nextStep, 
  prevStep, 
  propertyDetails, 
  setPropertyDetails,
  setOpened,
  setActive
}) => {

  console.log(propertyDetails);

  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails?.bedrooms,
      parkings: propertyDetails?.parkings,
      bathrooms: propertyDetails?.bathrooms,
    },
    validate: {
      bedrooms: (value) => value < 1 ? "Must have least one bedroom" : null,
      bathrooms: (value) => value < 1 ? "Must have least one bathroom" : null,
    }
  })

  const { bedrooms, parkings, bathrooms } = form.value

  const handleSubmit = () => {
    const {hasErrors} = form.validate()
    if(!hasErrors){
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: {bedrooms, parkings, bathrooms},
      }))
      mutate()
    }
  }

  const { user } = useAuth0();
  const { userDetails: { token }} = useContext(userDetailContext);
  const { refetch: refetchProperties } = useProperties() 

  const { mutate, isLoading } = useMutation({
    mutationFn: () => 
      createResidency(
        {
          ...propertyDetails,
          facilities: { bedrooms, parkings, bathrooms }
        },
        token, user?.email
      ),
      onError:({response}) => toast.error(response.data.message,{ position: "botton-right" }),
      onSettled: () => {
        toast.success("Added Successfully", { position: "bottom-right" });
        setPropertyDetails({
          title: "",
          description: "",
          price: 0,
          country: "",
          city: "",
          address: "",
          image: null,
          facilities: {
            bedrooms: 0,
            parkings: 0,
            bathrooms: 0,
          },
          userEmail: user?.email,
        });
      setOpened(false)
      setActive(1)
      refetchProperties()
      }
  })

  return (
    <Box maw={"30%"} mx="auto" my={"sm"}>
      <form
        onsubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <NumberInput 
          withAsterisk
          label="Nº of bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput 
          label="Nº of parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput 
          withAsterisk
          label="Nº of bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submittin" : "Add Property"}
          </Button>
        </Group>

      </form>

    </Box>
  )
}

export default Facilities