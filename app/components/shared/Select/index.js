import React, {useState} from 'react';

const Select = ({onChange}) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      items={{}}
      open={open}
      type=""
      label="Repeat"
      onChange={onChange}
    />
  );
};

export default Select;
