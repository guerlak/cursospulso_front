import styled, { css, DefaultTheme } from "styled-components"
import { ButtonProps } from "."

type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperSelector = {
    small: (theme: DefaultTheme) => css`
        min-height: 3rem;
        font-size: ${theme.font.size.small};
    `,
    medium: (theme: DefaultTheme) => css`
        min-height: 3rem;
        font-size: ${theme.font.size.medium};
    `,
    large: (theme: DefaultTheme) => css`
        min-height: 3rem;
        font-size: ${theme.font.size.large};
    `,
}

export const Wrapper = styled.button<WrapperProps>` 
   ${({ theme, size }) => css`
        background: ${theme.colors.secondary};
        color:  ${theme.colors.primary};;
        font-weight: bold;
        border: 0;
        border-radius: 5px;
        padding: 0.8rem;
        cursor: pointer;
        ${!!size && wrapperSelector[size](theme)}
    `}
`