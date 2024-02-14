'use server'

import { Resend } from 'resend';



const resend = new Resend('');

export async function createRequest(prevState, formData) {
    
    const rawFormData = {
        pakket: formData.get('pakket'),
        name: formData.get('name'),
        email: formData.get('email'),
      extra: formData.get('extra')
    } 

    resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'mattiasmaasik@gmail.com',
      subject: `Pakketi Tellimus ${rawFormData.name}`,
      html: `
      <div>
      <h1>${rawFormData.name} tahab saada pakkketi ${rawFormData.pakket}</h1>
      <p>Email: ${rawFormData.email}</p>
      <p>Lisa Info: ${rawFormData.extra}</p>
      </div>`
    });


    return {
      message: 'Teade On Edukalt Saadetud',
    }
}

export async function createProblem(prevState ,formData) {
    
  const rawFormData = {
      message: formData.get('message'),
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address')
  }

  resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: 'mattiasmaasik@gmail.com',
    subject: `Teade ${rawFormData.name}`,
    html:`
    <div>
    <h1>${rawFormData.name} teatab</h1>
    <p>Email: ${rawFormData.email}</p>
    <p>Address: ${rawFormData.address}</p>
    <p>Info: ${rawFormData.message}</p>
    </div>`
  });

  return {
    message: 'Teade On Edukalt Saadetud',
  }
}

