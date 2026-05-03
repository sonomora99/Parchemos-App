import React, { useRef, useMemo, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import {
    BottomSheetModal,
    BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-paper';
import GlobalStyles from '../theme/GlobalStyles';

export default function BottomSheetSelect({
    wrapper,
    label,
    data,
    value,
    onChange,
    error,
    searchable = false,

}) {


    const ref = useRef(null);
    const snapPoints = useMemo(() => ['50%'], []);
    const [search, setSearch] = useState('');
    const open = () => {
        ref.current?.present();
    };

    const handleSelect = (item) => {
        onChange(item);
        ref.current?.dismiss();
    };

    const filteredData = searchable
        ? data.filter((item) =>
            item.value.toLowerCase().includes(search.toLowerCase())
        )
        : data;

    return (
        <View style={wrapper}>
            <TouchableOpacity
                style={[
                    styles.input,

                ]}
                onPress={open}
            >
                <Text style={[{ fontSize: 16 }, {
                    paddingTop: 0,
                    paddingBottom: 0,
                }]}>{value || label}</Text>
            </TouchableOpacity>

            <BottomSheetModal
                ref={ref}
                index={0}
                snapPoints={snapPoints}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
            >
                <View style={styles.container}>
                    <Text style={styles.title}>{label}</Text>
                    {searchable && (
                        <BottomSheetTextInput
                            placeholder="Buscar..."
                            value={search}
                            onChangeText={setSearch}
                            style={{
                                borderBottomWidth: 1,
                                borderColor: '#000',
                                borderRadius: 10,
                                padding: 10,
                                marginBottom: 15,
                                color: '#000'
                            }}

                        // style={[GlobalStyles.searchInput, { backgroundColor: '#ffffff', borderColor: '#000' }]}
                        />
                    )}
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => handleSelect(item)}
                            >
                                <Text>{item.value}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </BottomSheetModal>
        </View >
    );
}


const styles = StyleSheet.create({

    input: {

        height: 45,
        justifyContent: 'center',
        paddingHorizontal: 15,

    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    item: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    activeItem: {
        backgroundColor: '#f2f2f2',
    },
    itemText: {
        fontSize: 15,
    },
});
