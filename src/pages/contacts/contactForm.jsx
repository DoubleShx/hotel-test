import { CFormInput } from '@coreui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { tgBotData } from '../../data/PrepareData'

const initialFormData = {
    first_name: '',
    last_name: '',
    phone: '',
    message: ''
}
export const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData)
    const [data, setData] = useState('')
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const SubmitForm = (e) => {
        e.preventDefault()
        axios({
            method: 'get',
            url: `https://api.telegram.org/bot${tgBotData.token}/sendMessage`,
            params: {
                chat_id: tgBotData.chat_id,
                parse_mode: 'MarkdownV2',
                text: Object.entries(formData).map(item => (`${item[0]}: *${item[1]}* \n`)).join("")
            }
        })
        // .then(res => console.log(res.data.result))
        // .then(res => setData(JSON.parse((res.data.result[16].message.text))))
        .then(res => setData(JSON.parse((res.data.result[17].channel_post.text.replace))))
        .catch(err => console.log(err))
    }
    return (
        <form className="form-a contactForm" action="" role="form" onClick={()=>console.log(typeof data, data)} onSubmit={SubmitForm}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
            <CFormInput type="text" id="validationCustom01" name="first_name" onChange={handleChange} value={formData.first_name} placeholder="First Name" className='form-control form-control-lg form-control-a' required />              
              <div className="validation"></div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group">
            <CFormInput type="text" id="validationCustom01" name="last_name" onChange={handleChange} value={formData.last_name} placeholder="Last Name" className='form-control form-control-lg form-control-a' required />
              <div className="validation"></div>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="form-group">
            <CFormInput type="phone" id="validationCustom01" name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone" className='form-control form-control-lg form-control-a' required />
              <div className="validation"></div>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="form-group">
              <textarea className="form-control" name="message" cols="45" onChange={handleChange} value={formData.message} rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Message"/>
              <div className="validation"></div>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </form>
    )
}