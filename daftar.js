import { Container, Form, Button, Modal } from "react-bootstrap";

function Daftar ({ show, showDaftar }) {
    const handleClose = () => showDaftar(false);

    return (
        <Modal show={show} onHide={handleClose}>
            <Container className="">
                <Form className="">
                    <h2 className="text-warning text-center fw-bold my-3">Daftar</h2>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Nama Lengkap" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Control type="text" placeholder="Username" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control type="email" placeholder="Email" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Password" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Form.Select className="mb-3" aria-label="Default select example">
                        <option hidden>Jenis Kelamin</option>
                        <option value="1">Pria</option>
                        <option value="2">Wanita</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="telp">
                        <Form.Control type="number" placeholder="Telp" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="alamat">
                        <Form.Control as="textarea" placeholder="Alamat" rows={3} className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="rounded-pill fw-bold bg-gradient w-100 my-4">Daftar</Button>
                </Form>
            </Container> 
        </Modal>
    );
};

export default Daftar;

