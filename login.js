import { useContext, useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Login({ show, showLogin, showDaftar, props }) {
    const handleClose = () => showLogin(false);
    const changeModal = () => {
        handleClose();
        showDaftar(true);
    }

    const [login, setLogin] = useState({});

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();
    const [state, dispatch] = useContext(userContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let status;
        if (username === "admin@gmail.com") {
            status = "admin";
            navigate("/listransaksi");
        } else {
            status = "customer";
            navigate("/")
        }

        const data = {
            username,
            password,
            status,
        };

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data,
        });
        props.onHide(true);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Container className="">
                <Form className="" onSubmit={handleSubmit}>
                    <h2 className="text-warning text-center fw-bold my-3">Login</h2>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Control type="text" placeholder="Username" id="username" onChange={handleChange} className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2"/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="rounded-pill fw-bold bg-gradient w-100 my-4">Login</Button>
                    <p className="text-center">Belum Punya Akun ? Klik <b onClick={changeModal} style={{cursor:"pointer"}} className="text-warning">disini</b></p>   
                </Form>
            </Container>
        </Modal>
    );
};

export default Login;