interface Options {
  prompt: string;
}

export const orthograpgyCheckUseCase = async (options: Options) => {
  const { prompt } = options;

  return {
    prompt: prompt,
  };
};
