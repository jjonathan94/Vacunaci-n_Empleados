import React, {useState} from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Layout, DatePicker, Select, InputNumber } from 'antd';

import {EmpleadoAppBar} from './EmpleadoAppBar'

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

export const EmpleadoScreen = () => {
    const [validar, setValidar] = useState(false)
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const selectedOption = "seleccionar";

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validarCanpos = (values) => {
        if(values == "vacunado"){
            setValidar(true);
        }else{
            setValidar(false);
        }
    }

    return (
        <Layout>
            <EmpleadoAppBar/>
            <Content style = {{paddingTop : "50px"}}>
                <Row justify="center" align="middle">
                    <Col md={12}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 20,
                            }}
                            wrapperCol={{
                                span: 100,
                            }}
                            layout = "vertical"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Fecha Nacimiento"
                                name="fecha"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese la fecha de nacimiento',
                                    }
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                label="Direccion de domicilio"
                                name="direccion"
                                rules={[
                                    { required: true, message: 'Ingrese la direccion' }
                                  ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Telefono movil"
                                name="telefono"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el telefono',
                                    },
                                    {
                                     pattern: new RegExp(/^[0-9]*$/),
                                     message: "No acepta letras"
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
                                        message: 'Ingrese el correo!',
                                        type : 'email'
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Estado"
                                name="estado"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Ingrese el estado!',
                                    },
                                ]}
                            >
                                <Select placeholder = "Selecciona un estado" onChange = {validarCanpos}>
                                    <Option value="vacunado">Vacunado</Option>
                                    <Option value="novacunado">No vacunado</Option>
                                </Select>
                            </Form.Item>
                            {validar ? 
                            (<div>
                                <Form.Item
                                    label="Tipo de vacuna"
                                    name="tipo"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese el tipo de vacuna!',
                                        },
                                    ]}
                                >
                                    <Select placeholder = "Selecciona un tipo">
                                        <Option value="Sputnik">Sputnik</Option>
                                        <Option value="AstraZeneca">AstraZeneca</Option>
                                        <Option value="Pfizer">Pfizer</Option>
                                        <Option value="JhonsonJhonson">PfizJhonsonJhonsoner</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Fecha de vacunacion"
                                    name="fechavacu"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la fecha de vacunacion',
                                        }
                                    ]}
                                >
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item
                                    label="Numero de dosis"
                                    name="dosis"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese el numero de dosis!'
                                        },
                                    ]}
                                >
                                    <InputNumber min="1" max="2" />
                                </Form.Item>
                            </div> ) 
                            : null
                            }
                              

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Modificar
                                </Button>
                            </Form.Item>                        

                        </Form>
                    </Col>
                </Row>
            </Content>
        </Layout>

    );
};