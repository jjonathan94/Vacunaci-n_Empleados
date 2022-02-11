import React, { useEffect, useState } from 'react'
import apiService from './../../services/apiService'
import { Form, Input, Button, Checkbox, Row, Col, Layout, Table } from 'antd';

import { NotesAppBar } from './NotesAppBar'
import { Tables } from './Tables';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const { Header, Footer, Sider, Content } = Layout;

export const NoteScreen = () => {

    const [form] = Form.useForm();

    const [empleados, setEmpleados] = useState([])



    const columns = [
        {
            title: 'Cedula',
            dataIndex: 'cedula',
            key: 'cedula',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            key: 'apellido',
        },
        {
            title: 'Correo',
            dataIndex: 'correo',
            key: 'correo',
        },
        {
            title: 'Opciones',
            dataIndex: 'opciones',
            key: 'opciones',
        },
    ];

    const onFinish = async (values) => {
        console.log('Success:', values);

        const response = await apiService.post('empleados',
            {
                cedula: values.cedula,
                nombre: values.nombre,
                apellido: values.apellido,
                correo: values.correo,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        form.resetFields();
        getdata();
    };

    const getdata = async () => {

        const response = await apiService.get('empleados',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

            }
        );
        setEmpleados(response.data)
        //console.log(response)

    };

    const modempleado = async (values) => {
        console.log('Success:', values);

        const response = await apiService.put('empleados',
            {
                cedula: values.cedula,
                nombre: values.nombre,
                apellido: values.apellido,
                correo: values.correo,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
        form.resetFields();
        getdata();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        getdata()
    }, [])

    return (
        <Layout>
            <NotesAppBar />
            <Content style={{ paddingTop: "50px" }}>
                <Row justify="center" align="middle">
                    <Col md={12}>
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 20,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Cedula"
                                name="cedula"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el numero de cedula',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (value.length == 10) {
                                                return Promise.resolve();

                                            } else {
                                                return Promise.reject('Debe contener 10 numeros');
                                            }
                                        },
                                    }),
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Nombre"
                                name="nombre"
                                rules={[
                                    { required: true, message: 'Ingrese el nombre' },
                                    {
                                        pattern: new RegExp(/^[a-zA-Z]*$/),
                                        message: "No acepta numeros o caracteres especiales"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Apellido"
                                name="apellido"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el apellido!',
                                    },
                                    {
                                        pattern: new RegExp(/^[a-zA-Z]*$/),
                                        message: "No acepta numeros o caracteres especiales"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Correo"
                                name="correo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese un correo válido',
                                        type: 'email'
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Guardar
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>

                                <h3>Empleados</h3>
                <Row justify="center" align="middle">
                    <Col md={24}>
                        <Table dataSource={empleados} columns={columns} />

                        <Tables dataEmpleados={empleados}>

                        </Tables>
                    </Col>
                </Row>
            </Content>
        </Layout>

    );
};