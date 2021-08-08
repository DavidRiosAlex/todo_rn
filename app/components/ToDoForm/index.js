import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import {CustomView} from '../shared/View';
import {CustomScrollView} from '../shared/CustomScrollView';
import {ButtonAdd} from '../shared/Button';
import {InputIcon} from '../shared/Input';
import Label from '../shared/Label';

const ToDoForm = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [remind, setRemind] = useState('');
  const [repeat, setRepeat] = useState('');
  const dispatch = useDispatch();

  const functionIndex = {
    title: setTitle,
    deadline: setDeadline,
    startTime: setStartTime,
    endTime: setEndTime,
    remind: setRemind,
    repeat: setRepeat,
  };

  const onChangeInput = inputName => {
    const setStateFunction = functionIndex[inputName];
    if (!setStateFunction) {
      throw new Error(
        `function ${inputName} doesn't exist in functionIndex state`,
      );
    }
    return ({nativeEvent: {text}}) => {
      setStateFunction(text);
      return undefined;
    };
  };

  const onSubmit = () => {
    const payload = {
      title,
      deadline,
      startTime,
      endTime,
      remind,
      repeat,
    };
    dispatch({
      type: 'NEW_TASK',
      payload,
    });
    return navigation.goBack();
  };

  return (
    <CustomScrollView
      backgroundColor="white"
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{flexGrow: 1}}
      width="100%"
      height="100%">
      <CustomView
        justifyContent="space-around"
        flex={1}
        // height={height * 0.8}
        backgroundColor="white">
        <CustomView
          paddingLeft={`${Math.floor(width * 0.05)}px`}
          paddingRight={`${Math.floor(width * 0.05)}px`}>
          <InputIcon
            type=""
            label="Title"
            value={title}
            onChange={onChangeInput('title')}
          />
        </CustomView>
        <CustomView
          paddingLeft={`${Math.floor(width * 0.05)}px`}
          paddingRight={`${Math.floor(width * 0.05)}px`}>
          <InputIcon
            type=""
            label="Deadline"
            value={deadline}
            onChange={onChangeInput('deadline')}
          />
        </CustomView>
        <CustomView
          flexDirection="row"
          justifyContent="space-between"
          //   ]backgroundColor="red"
          paddingLeft={`${Math.floor(width * 0.05)}px`}
          paddingRight={`${Math.floor(width * 0.05)}px`}>
          <InputIcon
            src="clockcircleo"
            label="Start Time"
            value={startTime}
            onChange={onChangeInput('startTime')}
          />
          <InputIcon
            src="clockcircleo"
            label="End Time"
            value={endTime}
            onChange={onChangeInput('endTime')}
          />
        </CustomView>
        <CustomView
          paddingLeft={`${Math.floor(width * 0.05)}px`}
          paddingRight={`${Math.floor(width * 0.05)}px`}>
          <InputIcon
            type=""
            label="Remind"
            value={remind}
            onChange={onChangeInput('remind')}
          />
        </CustomView>
        <CustomView
          paddingLeft={`${Math.floor(width * 0.05)}px`}
          paddingRight={`${Math.floor(width * 0.05)}px`}>
          <InputIcon
            type=""
            label="Repeat"
            value={repeat}
            onChange={onChangeInput('repeat')}
          />
        </CustomView>
        <CustomView alignItems="center">
          <ButtonAdd
            width={Math.floor(width * 0.9)}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height={Math.floor(height * 0.07) + 'px'}
            onPress={onSubmit}
            marginBottom={Math.floor(height * 0.1) + 'px'}
            marginTop={Math.floor(height * 0.05) + 'px'}
            flex={1}>
            <Label fontColor="white" fontWeigth="bold">
              Add
            </Label>
          </ButtonAdd>
        </CustomView>
      </CustomView>
    </CustomScrollView>
  );
};

export default ToDoForm;
