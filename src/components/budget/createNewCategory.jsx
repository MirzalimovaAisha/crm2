import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import { DemoLeftContainer, SendButton } from '../home/style'
import { AddNewTeacher, AddTeacherModalBottom, AddTeacherModalStyle, AddTeacherModalTop, ModalInput, ModalInputContainer, ModalLabel } from '../teachers/style'

export function CreateNewCategory({ open, setOpen }) {
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
                        <AddNewTeacher>Create new category</AddNewTeacher>
                        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                            <ModalInputContainer>
                                <ModalLabel>Category name</ModalLabel>
                                <ModalInput id='name' placeholder='Enter message' type='text'/>
                            </ModalInputContainer>
                            <SendButton>Create category</SendButton>
                        </div>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    )
}
