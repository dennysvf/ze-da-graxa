import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox permite que o usuário selecione uma ou mais opções.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox padrão',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checkbox marcado',
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Campo obrigatório',
    required: true,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Com texto de ajuda',
    hint: 'Este é um texto de ajuda para o checkbox',
  },
};

export const WithError: Story = {
  args: {
    label: 'Com erro',
    error: true,
    hint: 'Mensagem de erro',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Desabilitado',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Desabilitado e marcado',
    disabled: true,
    defaultChecked: true,
  },
};

const CheckboxGroupTemplate: React.FC<any> = (args) => {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <CheckboxGroup
      {...args}
      value={value}
      onChange={setValue}
    >
      <Checkbox value="option1" label="Opção 1" />
      <Checkbox value="option2" label="Opção 2" />
      <Checkbox value="option3" label="Opção 3" />
    </CheckboxGroup>
  );
};

export const Group: Story = {
  render: (args) => <CheckboxGroupTemplate {...args} />,
  args: {
    label: 'Grupo de checkboxes',
    hint: 'Selecione uma ou mais opções',
  },
};

export const GroupWithError: Story = {
  render: (args) => <CheckboxGroupTemplate {...args} />,
  args: {
    label: 'Grupo com erro',
    error: true,
    hint: 'Você precisa selecionar pelo menos uma opção',
    required: true,
  },
};

export const GroupDisabled: Story = {
  render: (args) => <CheckboxGroupTemplate {...args} />,
  args: {
    label: 'Grupo desabilitado',
    disabled: true,
    hint: 'Este grupo está desabilitado',
  },
};

// Exemplo de uso em formulário
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      terms: false,
      notifications: [],
    });

    const handleTermsChange = (checked: boolean) => {
      setFormData(prev => ({ ...prev, terms: checked }));
    };

    const handleNotificationsChange = (value: string[]) => {
      setFormData(prev => ({ ...prev, notifications: value }));
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
        }}
        style={{ width: '300px' }}
      >
        <Checkbox
          label="Aceito os termos de uso"
          required
          checked={formData.terms}
          onChange={handleTermsChange}
          hint="Você precisa aceitar os termos para continuar"
          style={{ marginBottom: '1rem' }}
        />

        <CheckboxGroup
          label="Preferências de notificação"
          value={formData.notifications}
          onChange={handleNotificationsChange}
          hint="Escolha como deseja receber notificações"
        >
          <Checkbox value="email" label="Email" />
          <Checkbox value="sms" label="SMS" />
          <Checkbox value="push" label="Push" />
        </CheckboxGroup>

        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Enviar
        </button>
      </form>
    );
  },
};
