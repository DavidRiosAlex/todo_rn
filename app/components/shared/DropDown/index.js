import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {backgroundInputs, lineSeparator} from '../../../constants';

const SelectDropDown = ({
  options = [],
  onChange = () => {},
  defaultOption = {value: null, label: null},
}) => {
  const [open, setOpen] = useState(open);
  const [value, setValue] = useState(defaultOption);
  const [items, setItems] = useState(options);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={style.select}
      listMode="SCROLLVIEW"
      disableBorderRadius
      dropDownContainerStyle={style.dropDownStyle}
      listItemContainerStyle={style.itemStyle}
      onChangeValue={onChange}
    />
  );
};

const style = StyleSheet.create({
  select: {
    zIndex: 2,
    backgroundColor: backgroundInputs,
    elevation: 0,
    borderWidth: 0,
  },
  dropDownStyle: {
    borderWidth: 0,
    backgroundColor: backgroundInputs,
  },
  itemStyle: {
    borderTopWidth: 1,
    borderTopColor: lineSeparator,
    padding: 5,
    height: 50,
  },
});

export default SelectDropDown;
