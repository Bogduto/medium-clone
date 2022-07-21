import { useSession } from 'next-auth/react'
import { TipTap, Loading } from '../../components/'
import { useForm } from 'react-hook-form'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'

const WrittingHistory = () => {
    const { data: session, status } = useSession()
    const { handleSubmit, watch, setValue, error } = useForm({
        defaultValues: { image: null, title: null, description: null, content: null, author: null },
    });

    const { image } = watch()
    useEffect(() => {
        setValue("author", session && session.user.email)
    }, [session])

    const handleInput = useRef(null)

    const handleClick = (e) => {
        handleInput.current.click()
    }

    const handleRemoveImage = () => {
        setValue('image', null)
    }

    const handleAddImage = async (e) => {
        try {
            const formData = new FormData()
            await formData.append('image', e.target.files[0])
            const { data } = await axios.post('http://localhost:3001/upload', formData)
            setValue('image', `http://localhost:3001${data.url}`)
        } catch (err) {
            console.log(err);
        }
    }

    const addContent = (e) => {
        setValue("content", e)
    }

    const handleCreate = handleSubmit(async (data) => {
        try {
            console.log(data);
            await axios.post('http://localhost:3001/createPost', data)
            Router.push('/')
        } catch (err) {
            console.log(err);
        }
    })

    if (!session) return (
        <div>
            <h3>Иди нахуй</h3>
            <Link href='/'>back</Link>
        </div>)

    if (status === "loading") return <Loading />
    return (
        <div className='history'>
            <form onSubmit={handleCreate} className='form'>
                <div className="history__top">
                    <div className="history__top-left">
                        <div className='history__top-left-draft'>
                            Draft in
                            <span className='history__top-left-draft--gmail'>{session && session.user.email}</span>
                        </div>
                    </div>
                    <div className="history__top-right">
                        <button className="history__top-right-publish" type='submit'>publish</button>
                    </div>



                </div>

                <div className='form__col'>
                    {!image && <button type="button" className="form__col__btn" onClick={handleClick}>Добавить картинку</button>}
                    <input type="file" hidden ref={handleInput} onChange={handleAddImage} />
                    {image && <div className='form__col__image'>
                        <img src={image} />
                        <div onClick={handleRemoveImage} className='form__col__image-close'>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" />
                        </div>
                    </div>}
                </div>
                <div className='form__col'>
                    <label className='form__col__text'>title</label>
                    <input className='form__col__input' type="text" id='title' onChange={(e) => setValue("title", e.target.value)} placeholder='title post' />
                </div>
                <div className='form__col'>
                    <label className='form__col__text'>description</label>
                    <textarea minLength={10} maxLength={500} className='form__col__textarea' type="text" onChange={(e) => setValue("description", e.target.value)} placeholder='description' />
                </div>
                <TipTap addContent={addContent} placeholder="Tell your story" />
            </form>
        </div>
    )
}

export default WrittingHistory;
