import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import styled from 'styled-components'
import { message, Input, Button, Form as AntForm, Select } from 'antd'
import BulbFilled from '@ant-design/icons'

// import { UserOutlined, MailOutlined } from '@ant-design/icons'

import { colors } from '../../../config/colors'
import ColorSelect from './ColorSelect'
const URL = '/'
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 2rem 4rem 0 4rem;
  background: ${({ colors }) => colors.green};
  padding: 2rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

// const { TextArea } = Input

const Form = ({ className }) => {
  const [color, setColor] = useState('')

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      city: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Daugiausiai 15 ženklų')
        .required('Prašome įvesti savo vardą'),
      email: Yup.string()
        .email('Neteisingas el. paštas')
        .required('Prašome įvesti savo el. paštą'),
      phone: Yup.number()
        .typeError('Neteisingas telefono numeris')
        .positive('Neteisingas telefono numeris')
        // .test('len', 'Telefono numeryje per daug skaitmenų', val => {
        //   if (val !== '') {
        //     val.toString().length < 10
        //   }
        // })
        .integer('Neteisingas telefono numeris')
    }),
    onSubmit: async values => {
      const data = new FormData()
      data.append('vardas', values.name)
      data.append('pastas', values.email)
      data.append('telefonas', values.phone)
      data.append('spalva', color)
      data.append('miestas', values.city)

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...values,
          color
        })
      })
        .then(() => {
          message.success('Ačiū! Netrukus su jumis susisieksime')
          formik.resetForm()
        })
        .catch(error =>
          message.error('Nepavyko išsiųsti užklausos. Bandykite dar kartą')
        )
    }
  })
  return (
    <StyledForm
      onSubmit={formik.handleSubmit}
      colors={colors}
      className={className}
      data-netlify="true"
      name="contact"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      <AntForm.Item
        validateStatus={
          formik.touched.name && formik.errors.name
            ? 'error'
            : !formik.errors.name
        }
        hasFeedback={formik.touched.name && !formik.errors.name}
        help={formik.errors.name}
      >
        <label htmlFor="name">Jūsų vardas</label>
        <Input
          allowClear
          required
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          // prefix={<UserOutlined />}
          rules={formik.touched.name && formik.errors.name}
        />
      </AntForm.Item>

      <AntForm.Item
        validateStatus={
          formik.touched.email && formik.errors.email ? 'error' : null
        }
        help={formik.errors.email}
      >
        <label htmlFor="email">El. paštas</label>
        <Input
          allowClear
          required
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          // prefix={<MailOutlined />}
        />
      </AntForm.Item>
      <AntForm.Item
        validateStatus={
          formik.touched.phone && formik.errors.phone ? 'error' : null
        }
        help={formik.errors.phone}
      >
        <label htmlFor="phone">Telefono numeris</label>
        <Input
          allowClear
          maxLength="10"
          addonBefore="+370"
          required
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          // prefix={<MailOutlined />}
        />
      </AntForm.Item>
      {/* <AntForm.Item>
        <label htmlFor="color">Spalva</label>
        <Select defaultValue="Medžio" suffixIcon={<BulbFilled />}>
          <Option value="natural">Medžio</Option>
          <Option value="white">Balta</Option>
        </Select>
      </AntForm.Item> */}
      <ColorSelect color={color} setColor={setColor} />
      <AntForm.Item>
        <label htmlFor="city">Jūsų miestas</label>
        <Input allowClear id="city" name="city" />
      </AntForm.Item>

      {/* <AntForm.Item
        validateStatus={
          formik.touched.message && formik.errors.message ? 'error' : null
        }
        help={formik.errors.message}
      >
        <label htmlFor="message">Message</label>

        <TextArea
          allowClear
          required
          rows={4}
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
      </AntForm.Item> */}

      <Button htmlType="submit" type="primary" colors={colors}>
        Siųsti
      </Button>
    </StyledForm>
  )
}

export default Form
