import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('PostComments Component', () => {
  it('deve inserir dois comentários na lista', () => {
    //  Renderiza o componente
    render(<PostComments />);

    //  Seleciona o textarea e o botão via data-testid
    const input = screen.getByTestId('input-comment');
    const btn = screen.getByTestId('btn-submit');

    //  Simula digitar e enviar o primeiro comentário
    fireEvent.change(input, { target: { value: 'Comentário 1' } });
    fireEvent.click(btn);

    //  Simula digitar e enviar o segundo comentário
    fireEvent.change(input, { target: { value: 'Comentário 2' } });
    fireEvent.click(btn);

    //  Busca todos os itens e confere se são 2
    const items = screen.getAllByTestId('comment-item');
    expect(items).toHaveLength(2);

    // (Opcional) Verifica conteúdo dos comentários
    expect(items[0]).toHaveTextContent('Comentário 1');
    expect(items[1]).toHaveTextContent('Comentário 2');
  });
});
