import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
export const schema = yup.object().shape({
  answer1: yup.string().required('the  answer1 field is required!'),
  answer2: yup.string().required('the  answer2 field is required!'),
  answer3: yup.string().required('the  answer3 field is required!'),
  answer4: yup.string().required('the  answer4 field is required!'),
  answer5: yup.string().required('the  answer5 field is required!'),
  answer6: yup.string().required('the  answer6 field is required!'),
  answer7: yup.string().required('the  answer7 field is required!'),
  answer8: yup.string().required('the  answer8 field is required!'),
  answer9: yup.string().required('the  answer9 field is required!'),
  answer10: yup.string().required('thea nswer10 field is required!'),
  answer11: yup.string().required('thea nswer11 field is required!'),
  answer12: yup.string().required('thea nswer12 field is required!'),
  answer13: yup.string().required('thea nswer13 field is required!'),
  answer14: yup.string().required('thea nswer14 field is required!'),
  answer15: yup.string().required('thea nswer15 field is required!'),
  answer16: yup.string().required('thea nswer16 field is required!'),
  answer17: yup.string().required('thea nswer17 field is required!'),
  answer18: yup.string().required('thea nswer18 field is required!')
  // answer19: yup.string().required('thea nswer18 field is required!'),
  // answer20: yup.string().required('thea nswer18 field is required!'),
  // answer21: yup.string().required('thea nswer18 field is required!'),
  // answer22: yup.string().required('thea nswer18 field is required!'),
  // answer23: yup.string().required('thea nswer18 field is required!'),
  // answer24: yup.string().required('thea nswer18 field is required!'),
  // answer25: yup.string().required('thea nswer18 field is required!')
})

const initialValues = {
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: '',
  answer6: '',
  answer7: '',
  answer8: '',
  answer9: '',
  answer10: '',
  answer11: '',
  answer12: '',
  answer13: '',
  answer14: '',
  answer15: '',
  answer16: '',
  answer17: '',
  answer18: ''
  // answer19: '',
  // answer20: '',
  // answer21: '',
  // answer22: '',
  // answer23: '',
  // answer24: '',
  // answer25: ''
}

export const UseDefaultValues = () => {
  const navigate = useNavigate()

  const mutate = async (values) => {
    try {
      // const { data } = await add({ variables: { arrPreferences } })
      // console.log(data)
      // Notify('preferences add')
      const nosexd = Object.values(values)
      let suma5primeras = 0
      let resto = 0
      nosexd.slice(0, 5).forEach((element) => {
        suma5primeras += element * 1
        console.log(element)
      })
      nosexd.slice(5, nosexd.length - 1).forEach((element) => {
        resto += element * 1
      })
      console.log({ suma5primeras, resto })
      const response = await axios.post(
        'https://pokeapi.co/api/v2/pokemon/ditto',
        {
          suma5primeras,
          resto
        }
      )

      console.log({ response })
    } catch (error) {
      // Notify('opps! something doesn`t seem to be right', 'error')
      return error
    }
  }

  return {
    isLoading: false,
    submit: mutate,
    error: 'uwu',
    formValues: {
      defaultValues: initialValues,
      formProps: {}
    }
  }
}
