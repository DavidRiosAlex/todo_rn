import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {ButtonAdd} from '../Button';
import Label from '../Label';
import {CustomView} from '../View';

const DateTimePickerModal = ({
  openModal,
  onClose,
  onDateChange,
  date,
  ...props
}) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  return (
    <Modal isVisible={openModal} deviceHeight={height} deviceWidth={width}>
      <CustomView
        paddingTop={15}
        backgroundColor="white"
        flexDirection="column"
        height={`${height * 0.5}px`}
        justifyContent="space-between"
        alignItems="center"
        maxHeight={300}>
        <DatePicker
          date={date}
          is24hourSource="locale"
          onDateChange={dateFn => {
            onDateChange(new Date(dateFn));
          }}
          {...props}
        />
      </CustomView>
      <CustomView
        paddingHorizontal={15}
        paddingBottom={15}
        backgroundColor="white">
        <ButtonAdd onPress={onClose}>
          <Label fontColor="white">Aceptar</Label>
        </ButtonAdd>
      </CustomView>
    </Modal>
  );
};

export default DateTimePickerModal;
