import React, {useState, useEffect} from  'react'
import {useStore} from 'store'


const LoginPage = (Props)=>{
    const [mail, setMail]= useState('')
    const [name, setName]= useState('')
    const [password, setPassword]= useState('')

    const {store, dispatch}=useStore('')

}