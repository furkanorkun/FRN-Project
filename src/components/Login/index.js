import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import REGISTER from '../../screens/Register';

const LoginComponent = () => {
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
        <Text style={styles.subTitle}>Please Login Here</Text>

        <View>
          <Input
            label="Username"
            iconPosition="left"
            placeholder="Enter Username"
            //error="This field is required"
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Click me" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a New Account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
