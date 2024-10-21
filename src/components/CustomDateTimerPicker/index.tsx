import React, { useEffect, useState } from "react";
import { Modal, Platform, View } from "react-native";
import { style } from "./styles";
import  DataTimePicker from "@react-native-community/datetimepicker";

const CustomDateTimerPicker = ({type,onDateChange,show,setShow }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false); // Oculta o picker após a seleção
  };
  

  return (
    <Modal
      transparent={true}
      visible={show}
      onRequestClose={()=>setShow(false)}
    >
      <View style={style.modalOverlay}>
        <View style={[
          style.container,
          Platform.OS == 'android'&&{backgroundColor:'transparent'}
          ]}>
          <DataTimePicker
            value={date}
            mode={type}
            display={Platform.OS === 'ios'?'inline':'default'}
            onChange={onChange}
          />
        </View>

      </View>
    </Modal>
  );
};

export default CustomDateTimerPicker;
