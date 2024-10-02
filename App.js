import React, { useState } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button, Image, ScrollView, Alert } from 'react-native';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Home');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'Home':
                return <HomeScreen onNavigateExperiencia={() => setCurrentScreen('Experiencias')} onNavigateCompetencia={() => setCurrentScreen('Competencias')} />;
            case 'Experiencias':
                return <ExperienciaScreen onNavigateHome={() => setCurrentScreen('Home')} />;
            case 'Competencias':
                return <CompetenciaScreen onNavigateHome={() => setCurrentScreen('Home')} />;
            default:
                return <HomeScreen onNavigateExperiencia={() => setCurrentScreen('Experiencias')} onNavigateCompetencia={() => setCurrentScreen('Competencias')} />;
        }
    };

    return <ScrollView style={styles.container}>{renderScreen()}</ScrollView>;
}

function HomeScreen({ onNavigateExperiencia, onNavigateCompetencia }) {
    return (
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={require('./assets/photo.jpeg')} />
                <Text style={styles.name}>Vinícius Moreira</Text>
                <Text style={styles.subtitle}>Desenvolvedor</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sobre</Text>
                <Text style={styles.sectionText}>
                    Estudo programação desde 2019, realizando cursos, projetos e trabalhos.
                    Atualmente em um curso superior na área com foco em crescimento pessoal e profissional.
                </Text>
            </View>
            <View style={{ marginBottom: 8 }}>
                <Button color={'#2eca7f'} title="Experiências" onPress={onNavigateExperiencia} />
            </View>

            <View style={{ marginTop: 8 }}>
                <Button color={'#2eca7f'} title="Competências" onPress={onNavigateCompetencia} />
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => {Linking.openURL('https://www.github.com/043vinicius')}}>
                    <View style={styles.buttonContent}>
                        <Image width={12} style={styles.icon} source={require('./assets/github.png')} />
                    </View>
                </TouchableOpacity>

                <View style={{ width: 8 }} />

                <TouchableOpacity onPress={() => {Linking.openURL('https://www.linkedin.com/in/vinícius-moreira-796aa3246/')}}>
                    <View style={styles.buttonContent}>
                        <Image width={12} style={styles.icon} source={require('./assets/linkedin.png')} />
                    </View>
                </TouchableOpacity>

                <View style={{ width: 8 }} />

                <TouchableOpacity onPress={() => { Linking.openURL('mailto:vinicius.moreira.silva557@gmail.com') }}>
                    <View style={styles.buttonContent}>
                        <Image width={12} style={styles.icon} source={require('./assets/gmail.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ExperienciaScreen({ onNavigateHome }) {
    return (
        <View style={{marginTop: 50}}>
            <Button color={'#2eca7f'} title="Voltar" onPress={onNavigateHome} />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experiência</Text>
                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Desenvolvedor de sistemas</Text>{'\n'}
                    <Text style={styles.year}>2024 - Presente</Text> | Sibrax Software{'\n'}
                    <Text style={styles.description}>- Desenvolvimento de sistemas para contabilidade</Text>
                </Text>

                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Desenvolvedor Web</Text>{'\n'}
                    <Text style={styles.year}>2021 - 2024</Text> | WDNA Sistemas{'\n'}
                    <Text style={styles.description}>- Desenvolvimento de sistema SaaS de e-commerce.</Text>
                </Text>

                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Desenvolvedor</Text>{'\n'}
                    <Text style={styles.year}>2019 - 2021</Text> | Autônomo{'\n'}
                    <Text style={styles.description}>- Desenvolvimento de bots de chat para Discord em Node.js</Text>
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Educação</Text>
                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</Text>{'\n'}
                    <Text style={styles.year}>2023</Text> | Universidade Positivo{'\n'}
                    <Text style={styles.description}>
                        - Curso superior focado no conhecimento geral da área de análise e desenvolvimento de sistemas de software.
                    </Text>
                </Text>

                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Curso de JavaScript Avançado</Text>{'\n'}
                    <Text style={styles.year}>2021</Text> | Udemy{'\n'}
                    <Text style={styles.description}>
                        - Curso completo de programação na linguagem JavaScript.
                    </Text>
                </Text>

                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Curso de Node.js</Text>{'\n'}
                    <Text style={styles.year}>2021</Text> | Udemy{'\n'}
                    <Text style={styles.description}>
                        - Curso prático de Node.js com foco em APIs e banco de dados.
                    </Text>
                </Text>

                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Curso de GIT e GitHub</Text>{'\n'}
                    <Text style={styles.year}>2021</Text> | Geek Academy{'\n'}
                    <Text style={styles.description}>
                        - Curso completo de GIT e GitHub com todos os conhecimentos necesarios para o mercado de trabalho.
                    </Text>
                </Text>

                <Text style={styles.sectionText}>
                    <Text style={styles.bold}>Curso de Design Gráfico e Edição de Vídeos</Text>{'\n'}
                    <Text style={styles.year}>2018</Text> | Prepara Cursos{'\n'}
                    <Text style={styles.description}>
                        - Curso completo de Design Gráfico para criação, arte, interface digital de software, sites, jogos, dentre outras aplicações
                    </Text>
                </Text>
            </View>
        </View>
    );
}

function CompetenciaScreen({ onNavigateHome }) {
    // Competência específica com nível de 90%
    const competencias = [
        { nome: 'Node.js', nivel: 0.9 },
        { nome: 'PHP', nivel: 0.6 },
        { nome: 'React Native', nivel: 0.4 },
        { nome: 'SQL', nivel: 0.8 },
    ];

    return (
        <View style={{ marginTop: 50, padding: 20 }}>
            <Button color={'#2eca7f'} title="Voltar" onPress={onNavigateHome} />
            <Text style={styles.sectionTitle}>Competências</Text>
            {competencias.map((competencia, index) => (
                <View key={index} style={styles.progressContainer}>
                    <Text style={styles.competenciaText}>{competencia.nome}</Text>
                    <View style={styles.progressBarBackground}>
                        <View style={[styles.progressBar, { width: `${competencia.nivel * 100}%` }]} />
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30,
        marginTop: 30,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        marginTop: 50,
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sectionText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
    },
    bold: {
        fontWeight: 'bold',
    },
    year: {
        color: '#2eca7f',
    },
    description: {
        fontSize: 14,
        color: 'grey',
    },
    progressContainer: {
        marginBottom: 15,
    },
    competenciaText: {
        fontSize: 16,
        marginBottom: 5,
    },
    progressBarBackground: {
        height: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#2eca7f',
        borderRadius: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonContent: {
        backgroundColor: '#2eca7f',
        padding: 8,
        borderRadius: 5,
        height: 40,
        width: 40,
    },
    icon: {
        width: 24,
        height: 24,
    },
});
