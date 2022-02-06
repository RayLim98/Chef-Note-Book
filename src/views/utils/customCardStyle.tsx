import { StackCardStyleInterpolator } from "@react-navigation/stack";

const customStyle: StackCardStyleInterpolator = ({ current, next, inverted, layouts: { screen } }) => {
    // Current  
    return {
        cardStyle:{
            opacity: current.progress.interpolate({
                inputRange: [0,1],
                outputRange: [0,1]
            }),
            transform: [
                {
                    translateY: current.progress.interpolate({
                        inputRange: [0,1],
                        outputRange: [screen.height*0.1, 0]
                    })
                },
                // {
                //     rotate: current.progress.interpolate({
                //         inputRange: [0,1],
                //         outputRange: ["-30deg", "0deg"]
                //     })
                // },
                {
                    perspective: 1000
                },
                {
                    scale: next ? 
                        next.progress.interpolate({
                            inputRange: [0,1],
                            outputRange: [1, 0.9]
                        }): 1
                }
            ]
        }
    }
}

export default customStyle