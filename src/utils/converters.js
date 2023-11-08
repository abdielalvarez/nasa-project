export function paginateData(
    data,
    elementsPerPage,
    page,
    startDate,
    endDate
) {
    const startIndex = (page - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / elementsPerPage);
    return {
      assets: paginatedData,
      page,
      contentPerPage: elementsPerPage,
      totalAssets: data.length,
      nextPage: page < totalPages ? page + 1 : null,
      previousPage: page > 1 ? page - 1 : null,
      totalPages,
      startDate: startDate ? startDate : undefined,
      endDate: endDate ? endDate : undefined,
    };
}