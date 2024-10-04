---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hey, I'm a second year Ph.D. student at [Trustworthy Autonomous Systems Laboratory](https://tasl.ucr.edu/), University of California, Riverside. It is my honor to be advised by Prof. [Jiachen Li](https://jiachenli94.github.io/). 

My research interest lies in the confluence of autonomous agents and multiagent systems, focusing on leveraging efficient multi-agent communication to develop robust algorithms for collaboratively solving perception, prediction, and decision-making challenges in real-world scenarios.

Previously, I earned my Master of Science degree in Computer Science from the New York University in 2023, where I was also interested on assessing the robustness of LLMs, with a particular interest in identifying and generating adversarial prompts that could mislead the models and even generate harmful content.

<span class='anchor' id='research-interests'></span>

# 🔥 Research Interests

- BEV Perception, Cooperative Perception, Occupancy Prediction
- Trajectory Prediction and Planning
- Multi-Agent Social Navigation
- Trustworthy LLM/VLM (misinformation, hallucination, out of domain)

<span class='anchor' id='projects'></span>

# 📝 Recent Projects

- [CMP: Cooperative Motion Prediction with Multi-Agent Communication](https://cmp-cooperative-prediction.github.io/)
  - A practical, latency-robust framework for cooperative motion prediction, which leverages the information shared by multiple CAVs to enhance perception and motion prediction performance.
  - Address the unified problem where CAVs share information in both perception and prediction modules.
  - Extensive experiments and ablation studies on the OPV2V and V2V4Real to demonstrate the effectiveness.

- Auto-generation of jailbreaking prompts by combining token-based learning and sampling strategy.

  - Despite advancements in safety alignment, Large Language Models (LLMs) are vulnerable to jailbreak attacks using specifically designed prompts. Current state-of-the-art prompt optimization [techniques](https://github.com/llm-attacks/llm-attacks), focusing on token-wise loss, often result in easily detectable prompts by perplexity-based defenses. This study investigates generating effective and semantically meaningful adversarial prompts by sampling from successful hand-crafted examples while remaining different levels of similarity, aiming to preserve their efficacy while enhancing meaningfulness.

<span class='anchor' id='experiences'></span>

# 📝 Service

- RA-L reviewer
- ICLR 2025 reviewer




# 💻 Past Experiences

- *2023.03 - 2023.05*,   **Research Assistant**, [NYU Multimedia and Visual Computing Lab](http://mmvc.engineering.nyu.edu/) at NYU,  Advisor: [Prof. Yi Fang](https://engineering.nyu.edu/faculty/yi-fang).
  - PolyFormer, Denoising Diffusion Probabilistic Models, and 3D Shape Generation.
- *2022.06-2022.08,*   **Machine Learning Engineer Intern** at [Chatkick, Inc.](https://chatkick.com/) New York, NY
  - Employed OCR, DETR, and NER models for resume information extraction, leveraging tools like AWS Lambda, HuggingFace, and spaCy.
- *2022.01 - 2022.05*,   **Teaching Assistant** for CS-GY 6573 at NYU
- *2020.12 - 2021.05*,   **Machine Learning Engineer** at [Pingan Technology Co., Ltd.](https://www.linkedin.com/company/ping-an-technology/) Beijing, China
  - Enhanced a Django/Numpy/OpenCV computer vision annotation tool with automatic image labeling using pre-trained models.
- *2020.06 - 2020.10*,   **Golang R&D engineer** at [ByteDance Co., Ltd.](https://www.linkedin.com/company/bytedance/) Beijing, China ![img](https://zehaowang983.github.io/images/bytedance.png)
  - Collaborated on a Kubernetes/Gin container orchestration service, enhanced microservice communication with Protocol Buffers and gRPC, ensuring efficient data compression, high available, and high throughput.

<span class='anchor' id='selected-awards'></span>

# 🎖 Selected Awards

- Dean's Distinguished Fellowship (2023)

- Merit Scholarship (2021)

- Outstanding Graduates (2020)

- National Scholarship (2019)

<span class='anchor' id='educations'></span>

# 📖 Educations

- *2023.09 - now*, Ph.D. in Computer Science, University of California, Riverside
- *2021.09 - 2023.05*, M.S. in Computer Science, New York University (GPA 4.0/4.0)
- *2016.09 - 2020.06*, B.S. in Software Engineering, Sun Yat-sen University (GPA 3.7/4.0)

<span class='anchor' id='skills'></span>

