import styled, { css, DefaultTheme } from "styled-components"
import { ButtonProps } from "."

type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperSelector = {
    lineTwo: (theme: DefaultTheme) => css`
        height: 4rem;
        max-width: 25rem;
        font-size: ${theme.font.size.medium};
        color: ${theme.colors.primary};
    `,
    small: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.size.small};
    `,
    medium: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.size.medium};
    `,
    large: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.size.large};
    `,
}

export const Wrapper = styled.button<WrapperProps>` 
   ${({ theme, size }) => css`
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border: 0;
        border-radius: 5px;
        padding: 0.8rem;
        cursor: pointer;
        ${!!size && wrapperSelector[size](theme)}
    `}
`