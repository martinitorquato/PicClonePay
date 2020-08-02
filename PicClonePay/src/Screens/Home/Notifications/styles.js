import styled from 'styled-components'


export const Wrapper = styled.SafeAreaView`
    background: #000
    flex: 1 
`
export const Header = styled.View`
    height: 50px
    padding: 0 16px
    flex-direction: row
    align-items: center
    justify-content: space-between
`
export const Container = styled.ScrollView`
`

export const Title = styled.Text`
    color: #fff
    font-size: 16px
    padding: 0 140px
    text-align: center
    font-weight: bold
`

export const CardNotification = styled.View`
    flex: 1
    background: #1E232A
    padding: 20px
    border-radius: 8px
    margin-right: 20px
`

export const CardBodyNotification = styled.View`
    flex-direction: row
    justify-content: space-between
`

export const CardDetailsNotification = styled.Text`
    font-size: 18px
    font-weight: bold
    color: #fff
`

export const CardInfoNotification = styled.Text`
    font-size: 14px
    color: rgba(255,255,255,0.8)
    margin-top: 15px
`