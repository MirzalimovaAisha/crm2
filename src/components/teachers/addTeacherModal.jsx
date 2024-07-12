import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import { AddNewTeacher, AddTeacherBtn, AddTeacherModalBottom, AddTeacherModalStyle, AddTeacherModalTop, ModalInput, ModalInputContainer, ModalLabel } from './style'
import { Checkbox, FormControlLabel } from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import { DemoInputs } from '../home/style'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export function AddTeacherModal({ open, setOpen }) {
    const [phone, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)
    const [fileName, setFileName] = React.useState('')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setFileName(file.name)
        } else {
            setFileName('')
        }
    }

    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <AddTeacherModalStyle>
                    <AddTeacherModalTop>
                        <ModalClose sx={{position: 'absolute', mt: '-5px'}}/>
                    </AddTeacherModalTop>
                    <AddTeacherModalBottom>
                        <AddNewTeacher>Add new teacher</AddNewTeacher>
                        <ModalInputContainer>
                            <ModalLabel htmlFor='name'>Full name</ModalLabel>
                            <ModalInput id='name' type='text' placeholder='Enter name'/>
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel htmlFor='surname'>Telegram username</ModalLabel>
                            <ModalInput id='surname' type='text' placeholder='Enter username'/>
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel htmlFor='photo'>Upload photo</ModalLabel>
                                <input 
                                    id='photo' 
                                    type='file' 
                                    onChange={handleFileChange} 
                                    style={{
                                        position: 'absolute', 
                                        background: 'red', 
                                        top: '20px', 
                                        height: '60px', 
                                        width: '100%', 
                                        cursor: 'pointer', 
                                        opacity: '0'
                                    }}
                                />
                                <ModalInput 
                                    id='photo' 
                                    type='text' 
                                    value={fileName} 
                                    placeholder='Upload photo'
                                />
                            </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel htmlFor='percent'>Percent(%)</ModalLabel>
                            <ModalInput id='percent' type='text' placeholder='Enter name'/>
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel>Branches</ModalLabel>
                            <div style={{display: 'flex'}}>
                                <FormControlLabel control={<Checkbox />} label="Seoul" />
                                <FormControlLabel control={<Checkbox />} label="Gyeongsan" />
                                <FormControlLabel control={<Checkbox />} label="Daegu" />
                                <FormControlLabel control={<Checkbox />} label="Gwangju" />
                            </div>
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel htmlFor='phone'>Phone number</ModalLabel>
                            <PhoneInput 
                                country={'us'} 
                                value={phone} 
                                onChange={phone => setPhone(phone)} 
                                inputStyle={{ width: '300px' }} 
                                buttonStyle={{
                                    height: "58px",  
                                    borderRadius: "8px 0 0 8px", 
                                    background: "#EFEEF8"
                                }} 
                            />
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel htmlFor='password'>Password</ModalLabel>
                            <DemoInputs 
                                type={showPassword ? 'text' : 'password'} 
                                value={password} onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Enter email address' id='Password' 
                            />
                            <div 
                                style={{
                                    position: 'absolute', 
                                    display: "flex", 
                                    justifyContent: "end", 
                                    width: "483px", 
                                    alignItems: "center", 
                                    top: "43px", 
                                    left: "40px"
                                }} 
                            >
                                {showPassword ? <FaEyeSlash style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/> : <FaEye style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/>}
                            </div>
                        </ModalInputContainer>
                        <AddTeacherBtn>Add teacher</AddTeacherBtn>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    )
}
