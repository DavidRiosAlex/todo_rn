import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {CustomView} from '../shared/View';
import {CustomScrollView} from '../shared/CustomScrollView';
import {ButtonAdd} from '../shared/Button';
import {InputIcon} from '../shared/Input';
import Label from '../shared/Label';
import DateTimePickerModal from '../shared/DateTimePickerModal';
import {newTask} from '../../actions';

const ToDoForm = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment().add(1, 'minutes'));
  const [remind, setRemind] = useState('');
  const [repeat, setRepeat] = useState('');
  const [openModalStart, setOpenModalStart] = useState(false);
  const [openModalEnd, setOpenModalEnd] = useState(false);
  const dispatch = useDispatch();

  const functionIndex = {
    title: setTitle,
    deadline: setDeadline,
    startTime: setStartTime,
    endTime: setEndTime,
    remind: setRemind,
    repeat: setRepeat,
    modalStart: () =>
      openModalStart ? setOpenModalStart(false) : setOpenModalStart(true),
    modalEnd: () =>
      openModalEnd ? setOpenModalEnd(false) : setOpenModalEnd(true),
  };

  // useEffect(() => {
  //   console.log(startTime);
  //   console.log(openModalStart);
  // }, [startTime, openModalStart]);

  const onChangeInput = inputName => {
    const setStateFunction = functionIndex[inputName];
    if (!setStateFunction) {
      throw new Error(
        `function ${inputName} doesn't exist in functionIndex state`,
      );
    }
    return event => {
      const value = event?.nativeEvent?.text ? event.nativeEvent.text : event;
      setStateFunction(value);
      return undefined;
    };
  };

  const onSubmit = () => {
    const payload = {
      title,
      deadline,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      remind,
      repeat,
    };
    dispatch(newTask(payload));
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
          <DateTimePickerModal
            openModal={openModalStart}
            onClose={onChangeInput('modalStart')}
            onDateChange={onChangeInput('startTime')}
            date={new Date(startTime)}
          />
          <DateTimePickerModal
            openModal={openModalEnd}
            onClose={onChangeInput('modalEnd')}
            onDateChange={onChangeInput('endTime')}
            date={new Date(endTime)}
          />
          <InputIcon
            src="clockcircleo"
            label="Start Time"
            value={moment(startTime).format('YYYY MM DD HH:MM')}
            onFocus={onChangeInput('modalStart')}
            // onChange={onChangeInput('modal')}
          />
          <InputIcon
            src="clockcircleo"
            label="End Time"
            value={moment(endTime).format('YYYY MM DD HH:MM')}
            onFocus={onChangeInput('modalEnd')}
            // onChange={onChangeInput('modal')}
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
            <Label fontColor="white" fontWeigth="bold" fontSize="15">
              Add
            </Label>
          </ButtonAdd>
        </CustomView>
      </CustomView>
    </CustomScrollView>
  );
};

export default ToDoForm;
