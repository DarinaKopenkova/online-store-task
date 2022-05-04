import React, { useEffect } from "react";
import { Modal, Input, Button } from "antd";
import styles from "./ModalForm.module.css";
import { useState } from "react";

const ModalForm = ({
  isModalVisible,
  handleOk,
  handleCancel,
  selectedItem,
}) => {
  const [nameValue, setNameValue] = useState();
  const [phoneValue, setPhoneValue] = useState();

  const isNameValid = Boolean(nameValue);
  const isPhoneValid = checkPhoneNumber(phoneValue);
  const isFormValid = nameValue && checkPhoneNumber(phoneValue);

  useEffect(() => {
    if (!isModalVisible) {
      setNameValue("");
      setPhoneValue("");
    }
  }, [isModalVisible]);

  return (
    <Modal
      title="Отправка формы"
      visible={isModalVisible}
      okButtonProps={{
        disabled: !isFormValid,
      }}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <label for="title">Наименование:</label>
      <Input
        className={styles.field}
        type="text"
        id="title"
        name="title"
        value={selectedItem && selectedItem.title}
      />
      <br></br>
      <label for="name">Имя: </label>
      <Input
        status={isNameValid ? undefined : "error"}
        placeholder="Укажите имя"
        className={styles.field}
        type="text"
        id="name"
        name="name"
        value={nameValue}
        onChange={(event) => {
          setNameValue(event.target.value);
        }}
      />
      <br></br>

      <label for="phone">Телефон:</label>
      <Input
        status={isPhoneValid ? undefined : "error"}
        placeholder="Укажите номер телефона"
        className={styles.field}
        type="text"
        id="phone"
        name="phone"
        value={phoneValue}
        onChange={(event) => {
          setPhoneValue(event.target.value);
        }}
      />
    </Modal>
  );
};

const checkPhoneNumber = (value) => {
  if (!value) {
    return false;
  }
  return /^([+]?[0-9\s-\(\)]{3,25})*$/i.test(value);
};

export default ModalForm;
