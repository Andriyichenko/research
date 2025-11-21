#include <cmath>
#include <iostream>
#include <iomanip>
#include <vector>
#include <sstream>
using namespace std;

// Derivative of a(x)
double a_prime(double x) {
	return x / (2.0 * sqrt(x * x + 1.0));
}

// Derivative of sigma(x)
double sigma_prime(double x) {
	return x / sqrt(x * x + 1.0);
}

int main(int argc, char* argv[]) {
	vector<double> xs;

	// If user provides x values via CLI, use them; otherwise use a default set
	if (argc > 1) {
		for (int i = 1; i < argc; ++i) {
			try {
				stringstream ss(argv[i]);
				double v;
				if (!(ss >> v)) {
					cerr << "Warning: could not parse '" << argv[i] << "' as a number. Skipped.\n";
					continue;
				}
				xs.push_back(v);
			} catch (...) {
				cerr << "Warning: invalid input '" << argv[i] << "'. Skipped.\n";
			}
		}
	}

	if (xs.empty()) {
		xs = {-5.0, -2.5, -1.0, -0.5, 0.0, 0.5, 1.0, 2.5, 5.0};
	}

	cout << fixed << setprecision(6);
	cout << "x\t\ta'(x)\t\t\tsigma'(x)" << '\n';
	for (double x : xs) {
		double ap = a_prime(x);
		double sp = sigma_prime(x);
		cout << setw(8) << x << "\t" << setw(12) << ap << "\t" << setw(12) << sp << '\n';
	}

	return 0;
}