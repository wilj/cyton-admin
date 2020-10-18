import React, { useEffect, useState } from 'react'
import {
    Button,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHeader,
    TableRow,
    Input,
    HelperText,
    Label,
    Select,
    Textarea,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@windmill/react-ui'

export type AlertProps = {
    message: string
    onClose: () => void
    title?: string
}
export default function Alert(props: AlertProps) {
    const { message, onClose, title } = props
    const [isModalOpen, setModalOpen] = useState(true)
    const closeModal = () => {
        setModalOpen(false)
        onClose()
    }

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalHeader>{title || ``}</ModalHeader>
            <ModalBody>{message}</ModalBody>
            <ModalFooter>
                <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
                    OK
                </Button>
            </ModalFooter>
        </Modal>
    )
}