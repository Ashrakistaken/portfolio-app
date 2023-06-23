import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-2'>
            <form method='POST' action="https://getform.io/f/00614e09-4182-469a-922f-347b89d64af7" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>İletişim</p>
                    <p className='text-gray-300 py-4'>İletişim bilgilerinizi doldurabilir veya bana e-posta gönderebilirsiniz: saracemirhan1210@gmail.com </p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Ad Soyad' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mesajınızı Giriniz'></textarea>
                <button className='text-white border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Güzel bir başlangıç için</button>
            </form>
        </div>
    )
}

export default Contact