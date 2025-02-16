import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import styles from './kullaniciProfilStyle.js';
import moment from 'moment';
import * as EmailValidator from 'email-validator';

export default class KullaniciProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Musteri: {},
      mailError: '',
      phoneError: '',
      acikAdresError: '',
      validateEmail: true,
      validateNumber: true,
      validateText: true,
    };
  }

  componentDidMount() {
    this.fetchInvoice();
  }

  fetchInvoice = () => {
    const {musteriNo} = this.props.navigation.state.params;
    fetch(
      'http://bankrestapi.azurewebsites.net/api/Musteri/GetById/' + musteriNo,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({Musteri: response});
      })
      .catch(err =>
        Alert.alert('Hata', 'Müşteri bilgileri getirilirken bir hata oluştu!'),
      );
  }

  validateEmail = (text) => {
    if (text !== '' && EmailValidator.validate(text)) {
      this.setState({validateEmail: true, mailError: ''});
    } else {
      this.setState({validateEmail: false, mailError: '!'});
    }
  };

  validateNumber = (text) => {
    let musteri = this.state.Musteri;
    musteri.cepTelefonu = text.replace(/[^0-9]/g, '');
    this.setState({Musteri: musteri});
    if (text !== '' && musteri.cepTelefonu.length === 11) {
      this.setState({validateNumber: true, phoneError: ''});
    } else this.setState({validateNumber: false, phoneError: '!'});
  };

  validateText = (text) => {
    let musteri = this.state.Musteri;
    musteri.acikAdres = text.replace(/[&+=?@€£$¥#|'~₺{}<>;^*%!-]/g, '');
    this.setState({Musteri: musteri});
    if (text !== '') {
      this.setState({validateText: true, acikAdresError: ''});
    } else {
      this.setState({validateText: false, acikAdresError: '!'});
    }
  };

  BilgileriGuncelle = () => {
    if(this.state.validateEmail && this.state.validateText && this.state.validateNumber) {
      fetch("http://bankrestapi.azurewebsites.net/api/Musteri/Update",{
          method:"put",
          body: JSON.stringify(this.state.Musteri),
          headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
          }
      })
      .then(()=>{
          Alert.alert(
            "Başarılı!",
            "Güncelleme işlemi başarılı bir şekilde tamamlanmıştır.",
            [{text:'OK', onPress:() => this.fetchInvoice() }]
          )
      })
      .catch(err=>{alert(err)})
    }
    else Alert.alert('Hata!', 'Lütfen bilgileri eksiksiz giriniz!');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerKP}></View>
          <Image
            style={styles.avatarKP}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />
          <View style={styles.bodyKP}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>
                {this.state.Musteri.ad} {this.state.Musteri.soyad}
              </Text>

              <View style={styles.disabled}>
                <Text style={styles.buttonColorKP}>TC Kimlik No: </Text>
                <TouchableHighlight>
                  <Text style={styles.buttonColorDataKP}>
                    {this.state.Musteri.tckn}
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.buttonContainerKP}>
                <Text style={styles.buttonColorKP}>Telefon: </Text>
                <TouchableHighlight>
                  <TextInput
                    style={styles.buttonColorDataKP}
                    maxLength={11}
                    keyboardType={'phone-pad'}
                    value={this.state.Musteri.cepTelefonu}
                    onChangeText={text => this.validateNumber(text)}
                  />
                </TouchableHighlight>
                <Text style={styles.inputStyleIcon}>
                  {this.state.phoneError}
                </Text>
              </View>

              <View style={styles.buttonContainerKP}>
                <Text style={styles.buttonColorKP}>E-Mail: </Text>
                <TouchableHighlight>
                  <TextInput
                    style={styles.buttonColorDataKP}
                    maxLength={25}
                    keyboardType={'email-address'}
                    value={this.state.Musteri.mail}
                    onChangeText={text => {
                      let musteri = this.state.Musteri;
                      musteri.mail = text;
                      this.setState({Musteri: musteri});
                      this.validateEmail(text);
                    }}
                  />
                </TouchableHighlight>
                <Text style={styles.inputStyleIcon}>
                  {this.state.mailError}
                </Text>
              </View>

              <View style={styles.disabled}>
                <Text style={styles.buttonColorKP}>Doğum Tarihi: </Text>
                <TouchableHighlight>
                  <Text style={styles.buttonColorDataKP}>
                    {moment(this.state.Musteri.dogumTarihi).format(
                      'DD/MM/YYYY',
                    )}
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.disabled}>
                <Text style={styles.buttonColorKP}>Kayıt Tarihi: </Text>
                <TouchableHighlight>
                  <Text style={styles.buttonColorDataKP}>
                    {moment(this.state.Musteri.kayıtTarihi).format(
                      'DD/MM/YYYY HH:mm',
                    )}
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.disabled}>
                <Text style={styles.buttonColorKP}>Açılış Platformu: </Text>
                <TouchableHighlight>
                  <Text style={styles.buttonColorDataKP}>
                    {this.state.Musteri.acilisPlatformAdi}
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.buttonContainerKP}>
                <Text style={styles.buttonColorKP}>Açık Adres: </Text>
                <TouchableHighlight>
                  <TextInput
                    style={styles.buttonColorDataKP}
                    maxLength={100}
                    //multiline={true}
                    value={this.state.Musteri.acikAdres}
                    onChangeText={text => this.validateText(text)}
                  />
                </TouchableHighlight>
                <Text style={styles.inputStyleIcon}>
                  {this.state.acikAdresError}
                </Text>
              </View>

              <TouchableOpacity style={styles.cikis} onPress={() => this.BilgileriGuncelle()}>
                <Text style={styles.buttonGuncelleKP}>BİLGİLERİMİ GÜNCELLE</Text>
              </TouchableOpacity>
              <Text style={styles.registerColorKP}>
                Kullanıcı bilgilerinizi güncellemek için değiştirmek istediğiniz
                bilgilerinizi girdikten sonra bilgilerimi güncelle butonuna
                basınız.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
