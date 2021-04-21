import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from './styles';

import logoImg from '../../assets/svg/logo.svg';
import api from '../../services/Api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Password recovery
        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Enviamos um e-mail para confirmar a recuperação de senha. Verifique em sua caixa de entrada.',
        });
        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar recuperar a senha. Tente novamente!',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>
          <Input name="name" icon={FiUser} placeholder="Nome completo" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Button loading={loading} type="submit">
            Recuperar senha
          </Button>
        </Form>
        <Link to="/signin">
          <FiArrowLeft />
          Voltar ao login
        </Link>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
