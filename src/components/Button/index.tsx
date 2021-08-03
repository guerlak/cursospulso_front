import * as S from './style'

export type ButtonProps = {
    children?: React.ReactNode
    size?: 'small' | 'medium' | 'large' | 'banner'
}

const Button = ({ children, size = 'medium' }: ButtonProps) => (
    <S.Wrapper size={size}>
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default Button;