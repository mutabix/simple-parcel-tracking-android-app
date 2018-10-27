import React, {Component} from 'react';
import {AppRegistry, Text, View, ActivityIndicator, StyleSheet} from 'react-native';

export default class Statuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }
    componentDidUpdate () {
        return fetch('http://tracking.sakowi.cz/api/parcel/'+this.props.number)
            .then ( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.statuses,
                })
            })
        .catch((error) => {
            console.log(error)
        });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>{this.props.number}</Text>
                    <ActivityIndicator />
                </View>
            )
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
            return (
                <View style={styles.container}>
                    {statuses}
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
    }
});

  AppRegistry.registerComponent('Statuses', () => Statuses)