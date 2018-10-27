import React, {Component} from 'react';
import {AppRegistry, Text, View, ActivityIndicator, StyleSheet} from 'react-native';

export default class Statuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            data: null,
            details: null
            
        }
    }
    componentDidUpdate () {
        return fetch('http://tracking.sakowi.cz/api/parcel/'+this.props.number)
            .then ( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.statuses,
                    data: responseJson
                })
            })
        .catch((error) => {
            console.log(error)
        });
    }
    render() {
        if (this.state.isLoading) {
            if (!this.props.number){
                return (
                    <View style={styles.container}>
                        <Text></Text>
                    </View>
                )
            }
            else{
                return (
                    <View style={styles.container}>
                        <ActivityIndicator />
                    </View>
                )
            }
            
        } else {
            let statuses = this.state.dataSource.map((val, key) => {
                return (
                <View key={key} style={styles.item}>
                    <View style={styles.date}>
                        <Text style={styles.created_at}>
                            {val.created_at}
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        {val.title}
                    </Text>
                    <Text style={styles.description}>
                        {val.description}
                    </Text>
                    <Text style={styles.location}>
                        {val.location}
                    </Text>
                </View>
                )
            });
            if (this.state.data.sender){
                this.state.details = (
                    <View>
                    <Text style={styles.header}>SZCZEGÓŁY PRZESYŁKI</Text>
                        <View style={styles.details}>
                            <Text style={styles.sender}>
                                <Text style={{fontWeight: 'bold'}}>Nadawca:{"\n"}</Text>
                                <Text>{this.state.data.sender}</Text>
                            </Text>
                            <Text style={styles.address}>
                                <Text style={{fontWeight: 'bold'}}>Adres docelowy:{"\n"}</Text>
                                <Text>{this.state.data.address}</Text>
                            </Text>
                        </View>
                        <Text style={styles.header}>STATUSY</Text>
                    </View>
                )
            } else this.state.details = null
            return (
                <View>
                    {this.state.details}
                    <View style={styles.container}>                    
                        {statuses}
                    </View>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        height: 80,
        padding: 10,
        margin: 3,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#eee',
        backgroundColor: '#f3f3f3'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontStyle: 'italic'
    },
    date: {
        alignSelf: 'stretch',
        flex: 1
    },
    created_at: {
        textAlign: 'right',
        fontSize: 10
    },
    details: {
        flexDirection:'row',
        height: 70,
        padding:10
    },
    address: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#f3f3f3'
    },
    sender: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#f3f3f3'
    },
    header: {
        fontSize: 24,
        padding:5,
        color: 'white',
        backgroundColor: '#7c7c7c',
        textAlign: 'center'
    }


});

  AppRegistry.registerComponent('Statuses', () => Statuses)