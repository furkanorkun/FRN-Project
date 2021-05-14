import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import LOGIN from '../../screens/Login';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        style={styles.logoImage}
        source={require('../../assests/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome To FRN</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View>
          <Input
            label="Username"
            iconPosition="left"
            placeholder="Enter Username"
            error={errors.userName}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="First Name"
            iconPosition="left"
            placeholder="Enter First Name"
            error={errors.firstName}
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
          />
          <Input
            label="Last Name"
            iconPosition="left"
            placeholder="Enter Last Name"
            error={errors.lastName}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="left"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title="Click me" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already Have a Account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
