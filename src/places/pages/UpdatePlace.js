import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import './PlaceForm.css';
const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Taj Mahal',
    description: 'one of the most famous Tourist places',
    imageUrl:
      'https://thumbs.dreamstime.com/b/taj-mahal-agra-india-morning-light-reflection-water-uttar-pradesh-108954918.jpg',
    address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
    location: {
      lat: 27.17532135071601,
      long: 78.04251771673096,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'red Fort',
    description: 'one of the most famous Tourist places',
    imageUrl:
      'https://cdn.britannica.com/75/152475-050-DA89FF0A/Red-Fort-Old-Delhi-India.jpg',
    address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
    location: {
      lat: 27.17532135071601,
      long: 78.04251771673096,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true,
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>loading...</h2>
      </div>
    );
  }
  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH()]}
        errorText='Please enter a valid description'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
