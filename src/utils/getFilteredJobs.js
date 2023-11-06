const getFilteredJobs = (jobs) => {
  const webdev = jobs?.filter((job) => job.Category === "Web Development");
  const graphic = jobs?.filter((job) => job.Category === "Graphic Design");
  const digitalMarketing = jobs?.filter(
    (job) => job.Category === "Digital Marketing"
  );
  const sales = jobs?.filter((job) => job.Category === "Sales & Marketing");
  const writting = jobs?.filter(
    (job) => job.Category === "Writing & Translation"
  );
  const education = jobs?.filter(
    (job) => job.Category === "Education & Training"
  );

  const categoriJobs = [
    webdev,
    graphic,
    digitalMarketing,
    sales,
    writting,
    education,
  ];
  return categoriJobs;
};

export default getFilteredJobs;
