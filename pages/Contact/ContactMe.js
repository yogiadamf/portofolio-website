/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, useEffect } from 'react'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import Typical from 'react-typical'
import Lottie from 'lottie-web'
import { Box, Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Swal from 'sweetalert2'

export default function ContactMe(props) {
  const {
    register,handleSubmit,
    formState: { errors }
  } = useForm()
  const form = useRef()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [user_email, setUser_email] = useState('')
  const banner = useState('')

  const handleName = e => {
    setName(e.target.value)
  }
  const handleMessage = e => {
    setMessage(e.target.value)
  }
  const handleEmail = e => {
    setUser_email(e.target.value)
  }
  console.log(name)
  const onSubmit  = () => {

    emailjs
      .sendForm(
        'service_j1ojrij',
        'template_enfh8qe',
        form.current,
        'user_RJoBK8IKTuKVu0MnH3N5X'
      )
      .then(
        () => {
          Swal.fire('Thank You!', 'Your Email Has Benn Sent!', 'success')
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      )
  }
  const container = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Chating.json')
    })
  }, [])

  return (
    <div className="main-container fade-in" id={props.id || ''}>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={['Get In Touch 📧', 1000]} />
          </h2>{' '}
        </div>
        <div className="back-form">
          <div className="img-back" ref={container}></div>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              onChange={handleName}
              value={name}
            />
            {errors.name && <p>*Name field is requaired</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('user_email', { required: true })}
              onChange={handleEmail}
              value={user_email}
            />
            {errors.user_email && <p>*Email field is required</p>}

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              {...register('message', { required: true })}
              onChange={handleMessage}
              value={message}
            />
            {errors.message && <p>*Message field is required</p>}

            <div className="send-btn">
              <Box align="center" my={4}>
                <Button
                  type="submit"
                  rightIcon={<EmailIcon />}
                  colorScheme="teal"
                >
                  Send
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
