import Dropdown from '@sb1/ffe-dropdown-react';
import { LinkText, Paragraph } from '@sb1/ffe-core-react';
import { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';
import { ButtonGroup, ActionButton, PrimaryButton, SecondaryButton } from '@sb1/ffe-buttons-react';

<>
    <InputGroup label="E-postadresse">
        <Input />
    </InputGroup>

    <InputGroup label="Måned">
        <Dropdown defaultValue="placeholder">
            <option value="placeholder" disabled>
                Velg måned
            </option>
            <option value="jan">Januar</option>
            <option value="feb">Februar</option>
            <option value="mar">Mars</option>
        </Dropdown>
    </InputGroup>

    <InputGroup label="Fritekst">
        <TextArea rows={4} />
    </InputGroup>

    <InputGroup>
        <Checkbox name="check">Kryssboks</Checkbox>
    </InputGroup>

    <Paragraph>
        Les mer på <LinkText href="https://www.lofavor.no/">lofavor.no</LinkText>.
    </Paragraph>

    <ButtonGroup>
        <ActionButton>Action knapp</ActionButton>
        <PrimaryButton>Primary knapp</PrimaryButton>
        <SecondaryButton>Secondary knapp</SecondaryButton>
    </ButtonGroup>
</>
