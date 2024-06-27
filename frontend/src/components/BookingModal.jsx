import React, { useContext, useState } from 'react'
import { Modal, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useMutation } from 'react-query'
import userDetailcontext from '../context/userDetailContext'
import { bookVisit } from '../utils/api'

const BookingModal = ({ opened, setOpened, propertyId, email }) => {

  const [value, setValue] = useState(null);                         // Estado para las fechas de la visita
  const { userDetails: {token} } = useContext(userDetailcontext);   // Token almacenado en el context de userDetail

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token)
  }) 

  return (
    <Modal
      opened={opened}
      setOpened={setOpened}
      title="Select Your date to visit"
      centered
      onClose={() => setOpened(false)}
    >
      <div className="flexCenter flex-col gap-4">
        <DatePicker 
          value={value}
          onChange={setValue}
          minDate={new Date()}
        />
        <Button
          disabled={!value}
          onClick={() => mutate()}
        >
          Book visit
        </Button>
      </div>
    </Modal>
  )
}

export default BookingModal