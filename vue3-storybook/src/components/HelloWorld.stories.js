import HelloWorld from './HelloWorld.vue';

export default {
    title: 'HelloWorld Stories',
    component: HelloWorld,
};

export const basic = () => ({
    template: '<HelloWorld msg="HelloWorld Stories" />',
});

export const withJSX = () => ({
    render() {
        return <HelloWorld msg="HelloWorld Stories">With JSX</HelloWorld>;
    },
});
