# Investor evidence TODO

Internal working list. Do not publish this file as website copy.

## Benchmark evidence project

- Record the run date, region, client location, cold/warm-start policy, and
  number of repetitions.
- Publish every trial, plus median, range, and p95 where the sample permits.
- Define the timing boundary for each test in executable terms.
- Publish the input scene or a redistributable equivalent, with its hash and
  license.
- Publish exact client commands, API requests, Modal configuration, Blender
  settings, software versions, and 4014 Labs build identifier.
- Publish raw timestamped logs, billing records, and artifact hashes.
- Publish both delivered 600-frame videos and document which output-quality
  properties were held constant.
- Publish the derivation of the estimated 120.47 seconds of reserved-but-idle
  GPU time.
- Have an unaffiliated person reproduce the comparison.

## Product and moat evidence

- Publish one complete agent trace: user request, discovered tools,
  agent-written program, failures and corrections, final result, elapsed time,
  and charge.
- Create objective evaluation cases for precision-led prompts such as barbell
  tracking and partial-face pixelation.
- Publish a fixed malformed-job corpus showing time-to-detection, GPU time,
  charge, and returned diagnostic for each failure class.
- Publish rolling p50/p95 queue and turnaround time, success rate,
  fast-failure latency, GPU-active fraction, and cost per completed task.
- Obtain an external security review before describing isolation or
  fixed-memory behavior as a guarantee.

## Developer trust

- Revise the PyPI README so agent instructions focus on accurate setup and
  product evaluation, not pitching social proof or soliciting an enthusiastic
  endorsement from the agent.
