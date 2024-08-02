import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import { DemoLeftContainer, SendButton } from '../home/style'
import { AddNewTeacher, AddTeacherModalBottom, AddTeacherModalStyle, AddTeacherModalTop, ModalInput, ModalInputContainer, ModalLabel, SelectInput } from '../teachers/style'

export function CreateNewExpense({ open, setOpen }) {
    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <AddTeacherModalStyle>
                    <AddTeacherModalTop>
                        <ModalClose sx={{position: 'absolute', mt: '-5px'}} onClick={setOpen}/>
                    </AddTeacherModalTop>
                    <AddTeacherModalBottom>
                        <AddNewTeacher>Create new expense</AddNewTeacher>
                        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                            <ModalInputContainer>
                                <ModalLabel>Description</ModalLabel>
                                <ModalInput id='name' placeholder='Enter text' type='text' style={{padding:"16px 16px 60px 16px", height:"auto"}}/>
                            </ModalInputContainer>
                            <ModalInputContainer>
                                <ModalLabel>Date</ModalLabel>
                                <ModalInput id='name' placeholder='Pick a date' type='text'/>
                            </ModalInputContainer>
                            <ModalInputContainer>
                                <ModalLabel>Select category</ModalLabel>
                                {/* <ModalInput id='name' placeholder='Enter message' type='text'/> */}
                                <SelectInput />
                            </ModalInputContainer>
                            <SendButton>Create category</SendButton>
                        </div>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    )
}
